import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMic } from 'react-icons/io';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <button type="button" className="return" label="Outline left"><AiOutlineLeft /></button>
    </Link>
    <h4>Country Stats</h4>
    <div className="header-buttons">
      <button type="button" className="microphone" label="microphone"><IoMdMic /></button>
      <button type="button" className="settings" label="Settings"><FiSettings /></button>
    </div>
  </div>
);

export default Header;
