import React from 'react';
import { useHistory } from 'react-router-dom';
import gear from '../assets/gear.png';

export default function SettingsBtn() {
  const history = useHistory();

  function handdleClick() {
    history.push('/settings');
  }

  return (
    <button
      type="button"
      data-testid="btn-settings"
      onClick={ handdleClick }
    >
      <img src={ gear } alt="gear" className="gear" />

    </button>
  );
}
