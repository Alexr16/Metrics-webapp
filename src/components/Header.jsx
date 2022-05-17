import React from 'react';
import { Link } from 'react-router-dom';
import { GrMicrophone } from 'react-icons/gr';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <button type="button" className="return" label="Outline left"><AiOutlineLeft /></button>
    </Link>
    <h4>Most Views</h4>
    <div className="header-buttons">
      <button type="button" className="microphone" label="microphone"><GrMicrophone /></button>
      <button type="button" className="settings" label="Settings"><FiSettings /></button>
    </div>
  </div>
);

export default Header;
