import React, { useState } from 'react';
import Button from './Button';

const SplitForm = ({ selected, onSplitBill }) => {
    const [bill, setBill] = useState('');
    const [userPayied, setUserPayied] = useState('');
    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const friendPayied = bill ? bill * 1 - userPayied * 1 : '';
    const handelSubmit = (e) => {
        e.preventDefault();
        if (!bill || !userPayied) return;
        onSplitBill(whoIsPaying === 'user' ? friendPayied : -userPayied);
    };

    return (
        <>
            <form className="form-split-bill" onSubmit={handelSubmit}>
                <h2>Split a bill with {selected.name}</h2>
                <label>💸 Bill value</label>
                <input
                    type="text"
                    value={bill}
                    onChange={(e) =>
                        Number(e.target.value)
                            ? setBill(e.target.value)
                            : setBill('')
                    }
                />
                <label>💰 Your expense</label>
                <input
                    type="text"
                    value={userPayied}
                    onChange={(e) => {
                        if (Number(e.target.value)) {
                            setUserPayied(e.target.value);
                        } else {
                            setUserPayied('');
                        }
                        if (Number(e.target.value) > bill) {
                            setUserPayied(userPayied);
                        }
                    }}
                />
                <label>🤑 {selected.name}'s expense</label>
                <input type="text" disabled value={friendPayied} />
                <label>🧐 Who's paying the bill ?</label>
                <select
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                >
                    <option value="user">You</option>
                    <option value="friend">{selected.name}</option>
                </select>
                <Button>Split bill</Button>
            </form>
        </>
    );
};
export default SplitForm;
