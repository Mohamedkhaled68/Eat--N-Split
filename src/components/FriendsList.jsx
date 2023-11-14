import React, { useState } from 'react';
import FriendItem from './FriendItem';

const FriendsList = ({ friends, onSelectFriend, selected }) => {
    return (
        <>
            <ul>
                {friends.map((friend) => {
                    return (
                        <FriendItem
                            friend={friend}
                            key={friend.id}
                            onSelectFriend={onSelectFriend}
                            selected={selected}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default FriendsList;
