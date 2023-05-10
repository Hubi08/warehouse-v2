import axios from 'axios';
import Table from './Table';
import AddCustomerModal from './AddCustomerModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import EditCustomerModal from './EditCustomerModal';
import InfoActionModal from './infoActionModal';
import { useState, useEffect, useContext } from 'react';
import { apiUrl, headers } from '../../../context/AuthContext';
import { DataContext } from '../../../context/DataContext';

export default function Customers() {
  const initialCustomer = {
    name: '',
    country: '',
    state: '',
    city: '',
    street: '',
    number: '',
    postalCode: '',
  };
  const [customers, setCustomers] = useState([]);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [id, setId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [infoAction, setInfoAction] = useState('');
  const [editContent, setEditContent] = useState(initialCustomer);
  const [newCustomer, setNewCustomer] = useState(initialCustomer);
  const [searchResults, setSearchResults] = useState([]);

  const { search } = useContext(DataContext);

  const handleInfoAction = (ms) => {
    setTimeout(() => {
      setInfoAction('');
    }, ms);
  };

  useEffect(() => {
    const filteredResults = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.city.toLowerCase().includes(search.toLowerCase()) ||
        customer.country.toLowerCase().includes(search.toLowerCase()) ||
        customer.street.toLowerCase().includes(search.toLowerCase()) ||
        customer.postalCode.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [customers, search]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(apiUrl + '/Customers', {
          headers,
        });

        setCustomers(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };

    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const customerKey = e.target.name;

    setNewCustomer({
      ...newCustomer,
      [customerKey]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(apiUrl + '/Customers', newCustomer, {
      headers,
    });

    setCustomers([...customers, newCustomer]);

    setNewCustomer(initialCustomer);
  };

  const handleDelete = (id) => {
    //z tabeli daje ID kliknietego klienta
    //ustawia nam modal delete na true zeby wyswietlic go
    setDeleteModalShow(true);
    setId(id);
  };

  const handleConfirm = async () => {
    if (!id) {
      return;
    }
    try {
      await axios.delete(apiUrl + `/Customers/${id}`, {
        headers,
      });
    } catch (error) {
      console.log(error);
    }
    const customersList = customers.filter((customer) => customer.id !== id);
    setCustomers(customersList);
    setDeleteModalShow(false);
    setId(null);
  };

  const handleEdit = (id) => {
    setOpenEditModal(true);

    setEditedCustomer(customers.find((customer) => customer.id === id));
  };

  const handleSubmitEdit = async (id) => {
    try {
      const response = await axios.patch(
        apiUrl + `/Customers/${id}`,
        editContent,
        {
          headers,
        }
      );

      setInfoAction(response.data);
      handleInfoAction(3000);

      //replace customer with edited item
      setCustomers(
        customers.map((customer) =>
          customer.id === id ? { ...customer, editContent } : customer
        )
      );

      setOpenEditModal(false);
      setEditContent(initialCustomer);
      setCustomers(
        customers.map((customer) =>
          customer.id === id ? { ...customer, editContent } : customer
        )
      );
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      {searchResults.length ? (
        <Table
          customers={searchResults}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <Table
            customers={customers}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
      {infoAction && <InfoActionModal info={infoAction} />}
      <AddCustomerModal
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newCustomer={newCustomer}
      />
      {deleteModalShow && (
        <ConfirmDeleteModal
          handleConfirm={handleConfirm}
          setDeleteModalShow={setDeleteModalShow}
        />
      )}
      {openEditModal && (
        <EditCustomerModal
          setOpenEditModal={setOpenEditModal}
          editContent={editContent}
          setEditContent={setEditContent}
          handleSubmitEdit={handleSubmitEdit}
          editedCustomer={editedCustomer}
        />
      )}
    </>
  );
}
