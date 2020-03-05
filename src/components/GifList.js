import React from 'react';

export default function GifList(props) {
  return (
    props.images.map(e => <div key={e.id}><img alt="" src={e.images.original.url} /></div>)
  );
}