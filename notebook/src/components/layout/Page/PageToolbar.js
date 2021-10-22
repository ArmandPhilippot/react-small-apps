import { Button } from "../../commons";
import { ReactComponent as TrashIcon } from "../../../images/trash.svg";
import { ReactComponent as RestoreIcon } from "../../../images/restore.svg";

function PageToolbar({ removePage, restorePage, deletedPages }) {
  return (
    <div className="notebook-page__toolbar toolbar">
      <div className="toolbar__item">
        {deletedPages.length > 0 && (
          <Button modifier="restore" onClickHandler={restorePage}>
            <RestoreIcon
              title="Undo page deletion"
              className="icon icon--restore"
            />
          </Button>
        )}
      </div>
      <div className="toolbar__item">
        <Button modifier="delete" onClickHandler={removePage}>
          <TrashIcon title="Delete this page" className="icon icon--trash" />
        </Button>
      </div>
    </div>
  );
}

export default PageToolbar;
