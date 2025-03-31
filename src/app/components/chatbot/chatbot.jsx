import { useState, useEffect } from "react";
import "./chatbot.css";

export const Chatbot = () => {
	const [messages, setMessages] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	// Called when the popup is opened
	useEffect(() => {
		if (isOpen) {
			// Initial bot message + options
			setMessages([
				{ text: "Hello! How can I help you today?", sender: "bot" },
				{
					text: "Join our Student Branch",
					sender: "bot",
					isOption: true,
					link: "https://example.com/join-ssb", // Replace with your actual link
				},
				{
					text: "Ask about event",
					sender: "bot",
					isOption: true,
					link: "https://example.com/events", // Replace with your actual link
				},
				{
					text: "Contact someone",
					sender: "bot",
					isOption: true,
					link: "mailto:someone@example.com", // Replace with your actual email or link
				},
			]);
		} else {
			// Clear messages when closed (optional)
			setMessages([]);
		}
	}, [isOpen]);

	// Handle user-typed messages (if you still want them)
	const handleSendMessage = () => {
		if (!userInput.trim()) return;
		// Add the user's message to the conversation
		setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
		setUserInput("");
	};

	// Open link in a new tab
	const handleLinkClick = (link) => {
		window.open(link, "_blank");
	};

	// Toggle popup open/close
	const togglePopup = () => setIsOpen(!isOpen);

	return (
		<div>
			{/* Button to open the chatbot popup */}
			{!isOpen && (
				<button className="open-chat-btn" onClick={togglePopup}>
					Chat with us
				</button>
			)}

			{/* Chatbot popup */}
			{isOpen && (
				<div className="chatbot-popup">
					<button className="closebutton" onClick={togglePopup}>
						x
					</button>
					<div className="chat-container">
						{messages.map((message, index) => (
							<div
								key={index}
								className={`message-row ${message.sender}-message`}
							>
								{message.sender === "bot" && !message.isOption && (
									<div className="bot-avatar">
										<i className="bot-icon">🤖</i>
									</div>
								)}

								{message.isOption ? (
									// If it's an option, show it as a clickable button or link without an icon

									<div className="options">
										<div className={`message-bubble ${message.sender}-bubble`}>
											<button
												className="option-button"
												onClick={() => handleLinkClick(message.link)}
											>
												{message.text}
											</button>
										</div>
									</div>
								) : (
									<div className={`message-bubble ${message.sender}-bubble`}>
										<p>{message.text}</p>
									</div>
								)}
							</div>
						))}
					</div>

					<div className="input-container">
						<input
							type="text"
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							placeholder="Type a message"
						/>
						<button onClick={handleSendMessage}>Send</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chatbot;
