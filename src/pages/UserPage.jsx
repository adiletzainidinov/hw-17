import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";
import styled from "styled-components";

const UserPage = ({ users, onDelete, onEdit }) => {
	return (
		<div>
			<FlexBox>
				<Text>Список студентов</Text>
				<Link
					to="/add"
					style={{
						color: "black",
						textDecoration: "none",
						fontSize: "20px",
						fontFamily: "Arial, Helvetica, sans-serif",
						marginTop: "10px",
					}}>
					Добавить студентов
				</Link>
			</FlexBox>
			<UserTable users={users} onDelete={onDelete} onEdit={onEdit} />
		</div>
	);
};

export default UserPage;

const Text = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`;
