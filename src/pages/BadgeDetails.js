import React from 'react';

import './styles/BadgeDetails.css';
import LogoConfetencia from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import { Link } from 'react-router-dom';

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > 4) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);

  const badge = props.badge;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={LogoConfetencia} alt="Logo de conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col actions">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  className="btn btn-info mr-4"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  increase Count: {count}
                </button>
                <Link
                  className="btn btn-primary"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
