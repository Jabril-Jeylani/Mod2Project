import Form from "react-bootstrap/Form";

export default function SelectStock() {
	return (
		<Form.Select aria-label="Default select example">
			<option>Select A Stock</option>
			<option value="NDAQ">Nasdaq</option>
			<option value="DOW">Dow</option>
			<option value="NVDA">Nvidia</option>
		</Form.Select>
	);
}
