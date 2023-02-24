import React from 'react'

const Userpage = () => {
  return (
	<div className="flex flex col">
		<form className="flex flex-col items-center">
			<label>
				Recipient Email:
				<input type="recipient_email" placeholder="example@gmail.com"></input>
			</label>
			<label>
				Email Body:
				{/* <input type="message" placeholder="email message"></input> */}
				<textarea 
				id="body" 
				rows="9"
				cols="45"
				className="block p-None text-sm rounded-lg border-2 resize-none focus:outline-none focus:ring-2" 
				placeholder="Submission goes here...">
				</textarea>
			</label>
		</form>
	</div>
  )
}

export default Userpage