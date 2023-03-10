import './CardBookmarkButton.css';

export default function CardBookmarkButton({ onClick, isActive }) {
  return (
    <button
      className={`card-bookmark-button ${
        isActive ? 'card-bookmark-button_active' : ''
      }`}
      type='button'
      onClick={onClick}
    />
  );
}
