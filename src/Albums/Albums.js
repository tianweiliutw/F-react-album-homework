import React, { Component } from 'react';
import './Albums.scss';
import { fetchAlbums } from '../apiUtil';
import Gallery from '../Gallery/Gallery';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      activeAlbum: 0,
    };
  }

  componentDidMount() {
    fetchAlbums().then((albums) => this.setState({ albums, activeAlbum: albums[0].id }));
  }

  handleClick(id) {
    this.setState({ activeAlbum: id });
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" key={album.id} onClick={() => this.handleClick(album.id)}>
            <p className="title">{album.title}</p>
            {this.state.activeAlbum === album.id ? <Gallery album={album} /> : null}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
