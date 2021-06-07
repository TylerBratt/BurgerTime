import React from 'react'

export default function LogoutButton(props) {
  return (
    <span onClick={props.onClick}>
      Logout
    </span>
  );
}