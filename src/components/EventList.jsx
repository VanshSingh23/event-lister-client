import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [city, setCity] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState('');
    const [gmail, setGmail] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://event-lister.onrender.com/events?city=${city}`);
            setEvents(response.data);
        } catch (err) {
            console.error('Error fetching events:', err);
        }
        setLoading(false);
    };

    const handleSearch = () => {
        fetchEvents();
    };

    const handleGetTickets = (url) => {
        setSelectedUrl(url);
        setShowModal(true);
    };

    const handleSubmit = () => {
        if (!gmail.includes('@gmail.com')) {
            alert('Please enter a valid Gmail address.');
            return;
        }
        setShowModal(false);
        window.location.href = selectedUrl;
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold text-black-600 mb-5">EventsLister</h1>

            {/* Search Box */}
            <div className="flex space-x-2 mb-6">
                <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button
                    onClick={handleSearch}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-black transition"
                >
                    Search
                </button>
            </div>

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center">
                    <ClipLoader size={40} />
                </div>
            ) : (
                <ul className="w-full max-w-2xl">
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <li key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">{event.title || 'Event Name'}</h2>
                                <p className="text-gray-600">{event.description || 'Event Description'}</p>
                                <p className="text-gray-700">
                                    <strong>Start:</strong> {new Date(event.start).toLocaleString()} &nbsp;|&nbsp;
                                    <strong>End:</strong> {new Date(event.end).toLocaleString()} &nbsp;|&nbsp;
                                    <strong>Duration:</strong> {Math.floor(event.duration / 3600)} hrs{' '}
                                    {Math.floor((event.duration % 3600) / 60)} mins
                                </p>
                                <button
                                    onClick={() => handleGetTickets('https://www.google.com/search?q='+event.title+' '+'tickets')}
                                    className="mt-3 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-black transition"
                                >
                                    Get Tickets
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center">No events found</p>
                    )}
                </ul>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-lg font-semibold mb-3">Enter Your Gmail</h3>
                        <input
                            type="email"
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 w-full"
                            placeholder="Enter your Gmail address"
                        />
                        <div className="flex space-x-3 justify-center">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventList;
