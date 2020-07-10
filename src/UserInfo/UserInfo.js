import React, { Component } from 'react';
import './UserInfo.scss';

const CONTACT_ME_ITEMS = [
  { title: 'Email', key: 'email', link: 'mailto:' },
  { title: 'Phone', key: 'phone', link: 'tel:' },
  { title: 'Website', key: 'website', link: 'http://' },
  { title: 'Company', key: 'company.name' },
];

class UserInfo extends Component {
  render() {
    return (
      <aside data-testid="userInfo" className="UserInfo">
        <h1 className="AuthorName">{this.props.user.name}</h1>
        <section className="ContactMeSection">
          <div className="ContactMeSectionLabel">Contact Me @</div>
          <ul className="ContactMeSectionItems">
            {CONTACT_ME_ITEMS.map((item) => (
              <ContactMeSectionItem item={item} user={this.props.user} key={item.key} />
            ))}
          </ul>
        </section>
      </aside>
    );
  }
}

function GetValue(obj, key) {
  if (!key) return null;
  if (!obj) return null;
  const keys = key.split('.');
  if (keys.length > 1) {
    const base = keys[0];
    keys.shift();
    if (!obj[base]) return null;
    return GetValue(obj[base], keys.join(','));
  }
  return obj[key];
}

function ContactMeSectionItem(props) {
  return (
    <li className="ContactMeSectionItem">
      <span className="ContactMeSectionItemLabel">{props.item.title}</span>
      <span className="ContactMeSectionItemValue">
        {props.item.link !== undefined ? (
          <a href={props.item.link + GetValue(props.user, props.item.key)}>
            {GetValue(props.user, props.item.key)}
          </a>
        ) : (
          GetValue(props.user, props.item.key)
        )}
      </span>
    </li>
  );
}

export default UserInfo;
