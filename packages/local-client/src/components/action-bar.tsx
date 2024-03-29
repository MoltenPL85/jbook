import './action-bar.css';
import { useActions } from '../hooks/use-actions';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  const moveUp = () => {
    moveCell(id, 'up');
  };

  const moveDown = () => {
    moveCell(id, 'down');
  };

  const removeCell = () => {
    deleteCell(id);
  };

  return (
    <div className="action-bar">
      <button className="button is-primary is-small" onClick={moveUp}>
        <span className="icon">
          <i className="fas fa-arrow-up"></i>
        </span>
      </button>
      <button className="button is-primary is-small" onClick={moveDown}>
        <span className="icon">
          <i className="fas fa-arrow-down"></i>
        </span>
      </button>
      <button className="button is-primary is-small" onClick={removeCell}>
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
