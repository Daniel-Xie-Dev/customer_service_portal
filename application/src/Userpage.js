import React from 'react'

const Userpage = () => {
  return (
	<div className="flex flex-col h-full">
		<form className="flex flex-col">
			<label className="flex flex-row m-1">
				Recipient Email:
				<input type="recipient_email" 
				className="mx-1 p-1 text-sm border-3 rounded-lg focus:outline-none focus:ring-2" 
				placeholder="example@gmail.com"></input>
			</label>
			<label className="mx-2 text-left">
				Email Body:
				<textarea 
				id="email_body" 
				rows="9"
				cols="45"
				className="block p-2 w-full h-2/3 text-sm rounded-lg border-3 resize-none focus:outline-none focus:ring-2" 
				placeholder="Email body...">
				</textarea>
			</label>
		</form>
		<form class="mt-80">
			<label for="chat" class="sr-only">Your message</label>
			<div class="flex mb-3 items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
				<textarea id="chat" rows="1" class="block mx-3 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
					<button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
					<svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
					<span class="sr-only">Send message</span>
				</button>
			</div>
		</form>
	</div>
  )
}

export default Userpage