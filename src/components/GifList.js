import React from 'react';

export default function GifList(props) {
  return (
    <ul>
    {props.images.map(e => <li key={e.id}><img alt="" src={e.images.original.url} /></li>)}
    </ul>
  );
}