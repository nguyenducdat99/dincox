// import style library, components
import "./Sizes.scss";
import SmallBanner from "../../fixcontents/smallbanner/SmallBanner";

// function code here
function Sizes(props) {
  // get props
  const {
    isDisplayFormRec,
    onClearItemEditRec,
    itemEditRec,
    onToggleFormRec,
    taskFormRec,
    taskListRec,
    taskControlUI,
  } = props;

  // toggle form add/edit
  const onToggleForm = () => {
    onClearItemEditRec({
      id_size: "",
      size_name: "",
      created_at: null,
      edited_at: null,
      status: 0,
    });

    if (itemEditRec && itemEditRec.id_size === "") {
      onToggleFormRec();
    }
  };

  return (
    <>
      <SmallBanner title="Quản lý kích cỡ" />
      <div className="sizes">
        <div className="wrapper">
          <div className="sizes__title">
            <h1>Quản lý kích cỡ</h1>
          </div>
          <div className="sizes__manager">
            <div
              className={
                isDisplayFormRec
                  ? "sizes__manager__grid"
                  : "sizes__manager__grid--hidden"
              }
            >
              <div
                className={
                  isDisplayFormRec
                    ? "sizes__manager__add-update"
                    : "sizes__manager__add-update--hidden"
                }
              >
                {taskFormRec()}
              </div>
              <div className="sizes__manager__other-action">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={onToggleForm}
                >
                  <span className="fa fa-plus"></span>Thêm Kích Cỡ
                </button>
                {taskControlUI()}
                {taskListRec()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sizes;
