import React from 'react'

class GifList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.imagePath.map(e =>
                        (
                            <li key={e.id}>
                                <img  src={e.images.original.url} className="animal-img" alt="animal-img"/>
                            </li>
                        )    
                    )}
                </ul>
            </div>
        )
    }
}

export default GifList;