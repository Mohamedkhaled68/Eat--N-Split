import React, { useState } from 'react';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import SplitForm from './components/SplitForm';
import Button from './components/Button';
import { initialFriends } from './data/initialFriends';

const App = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const handelShowForm = () => {
        setShowAddForm((prev) => !prev);
        setSelectedFriend(null);
    };
    const addNewFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
        setShowAddForm(false);
    };
    const showSelected = (friend) => {
        setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
        setShowAddForm(false);
    };

    const handleSplitBill = (value) => {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    };
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelectFriend={showSelected}
                    selected={selectedFriend}
                />
                {showAddForm && <AddFriendForm onAddFriend={addNewFriend} />}
                <Button onClick={handelShowForm}>
                    {showAddForm ? 'Close' : 'Add friend'}
                </Button>
            </div>
            {selectedFriend && (
                <SplitForm
                    selected={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
};

export default App;
