import { useState } from "react";
import EditUserModal from "./EditUserModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import styled from "styled-components";

const UserTable = ({ users, onDelete, onEdit }) => {
	const [isEditModalOpen, setEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const openEditModal = (user, index) => {
		setSelectedUser(user);
		setSelectedIndex(index);
		setEditModalOpen(true);
	};

	const openDeleteModal = (index) => {
		setSelectedIndex(index);
		setDeleteModalOpen(true);
	};

	const handleEditSave = (updatedUser) => {
		onEdit(selectedIndex, updatedUser);
	};

	const handleDeleteConfirm = () => {
		onDelete(selectedIndex);
		setDeleteModalOpen(false);
	};

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Пол</th>
						<th>Город рождения</th>
						<th>Год рождения</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={index}>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.gender}</td>
							<td>{user.cityOfBirth}</td>
							<td>{user.yearOfBirth}</td>
							<td>
								<span onClick={() => openEditModal(user, index)}>&#10000;</span>
								<span onClick={() => openDeleteModal(index)}>Х</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			{isEditModalOpen && (
				<EditUserModal
					isOpen={isEditModalOpen}
					onRequestClose={() => setEditModalOpen(false)}
					user={selectedUser}
					onSave={handleEditSave}
				/>
			)}

			{isDeleteModalOpen && (
				<DeleteConfirmModal
					isOpen={isDeleteModalOpen}
					onRequestClose={() => setDeleteModalOpen(false)}
					onConfirm={handleDeleteConfirm}
				/>
			)}
		</div>
	);
};

export default UserTable;

const Table = styled.table`
	width: 80%;
	margin: 0 auto;
	margin-top: 30px;
	border-collapse: collapse;
	font-family: Arial, Helvetica, sans-serif;

	th,
	td {
		padding: 8px;
		border-bottom: 1px solid #ddd;
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	tr:hover {
		background-color: #ddd;
	}

	td:last-child {
		text-align: center;
	}

	span {
		border: none;
		cursor: pointer;
		font-size: 25px;
		position: relative;
		right: 60px;
		margin-left: 10px;
	}
`;
