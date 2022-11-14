// Conversations
import {useState,useEffect} from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { markutosFrontendApi } from "../../../../services/Api/api";
import customerAuthHeader from "../../../../services/customer-auth-header";
import { useSearchParams} from "react-router-dom";
import Reply from "./supportModal/components/Reply";
import Conversations from "./supportModal/components/Conversations";
import { loadFromLocalStorage } from "../../../../../utils/user/manageLocalStorage";

const SingleTicket = () => {
	const [searchParams] = useSearchParams();
	const ticketId = searchParams.get('ticket_code')
	const [supportDetails, setSupportDetails] = useState("");
	const user = loadFromLocalStorage();
	useEffect(() => {
		if (user) {
			markutosFrontendApi
			.get(`/dashboard/support-conversation?ticket_code=${ticketId}`, {
				headers: {
					Authorization: customerAuthHeader(),
				},
			})
			.then((res) => {
				setSupportDetails(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
		}
		else{
			markutosFrontendApi
			.get(`/user-conversation?ticket_code=${ticketId}`)
			.then((res) => {
				setSupportDetails(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
		}
	}, [ticketId]);
	
  return (
	<div>
		<Reply ticket={supportDetails?.ticket}/>
		{/* Conversations */}
		<Conversations replies={supportDetails?.replies} ticketId={ticketId} createdAt={supportDetails?.ticket?.created_at} />
	</div>
  );
};

export default SingleTicket;
