import React, { Component } from 'react';
import './Gallery.scss';
import { fetchPhotos } from '../apiUtil';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetchPhotos(this.props.album.id).then((photos) => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    return (
      <section className="Gallery">
        {photos.slice(0, 3).map((photo) => (
          <div className="Photo" key={photo.id}>
            <img className="Thumbnail" src={photo.thumbnailUrl} alt={photo.title} />
            <p className="Title">{photo.title}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Gallery;
