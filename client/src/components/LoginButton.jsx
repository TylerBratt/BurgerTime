import React from 'react'

export default function LoginButton(props) {
  return (
    <span onClick={props.onClick}>
      Login
    </span>
  );
}