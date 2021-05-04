import { useEffect, useState } from "react";
import { mapValueAndName } from "../../../../constants/GlobalVariables";

function TaskItem(props) {
    //  get props, declare variable, constant
    const { 
        index, 
        itemRec,
        onUpdateStatusRec,
        openDetail 
    } = props;

    // declare state component;
    const [statusItem, setStatusItem] = useState(-1)

    // load status from data
    useEffect(
        () => {
            setStatusItem(itemRec.status);

            // eslint-disable-next-line
        },[]
    )

    // handle when change status
    const onHandleChange = event => {
        const value = event.target.value;

        const confirm = window.confirm('Bạn muốn thay đổi trạng thái đơn hàng?');

        if (confirm) {
            onUpdateStatusRec(
                {
                    id_order: itemRec.id_order,
                    status: value*1
                }
            )
            setStatusItem(value);
        } 
    }

    // handle return item for onSlectItem
    const onSelectItem = () => {
        openDetail(itemRec);
    }
    

    // return option for status of order
    const optionStatus = () => {

        switch (statusItem*1) {
            case -1:
                return (
                    <option value={mapValueAndName[4].value}> 
                        {mapValueAndName[4].name}
                    </option>
                )
            case 0:
                return (
                    <>
                        <option value={mapValueAndName[0].value}> 
                            {mapValueAndName[0].name}
                        </option>
                        <option value={mapValueAndName[1].value}> 
                            {mapValueAndName[1].name}
                        </option>
                        <option value={mapValueAndName[2].value}> 
                            {mapValueAndName[2].name}
                        </option>
                        <option value={mapValueAndName[3].value}> 
                            {mapValueAndName[3].name}
                        </option>
                    </>
                )
            case 1:
                return (
                    <>
                        <option value={mapValueAndName[1].value}> 
                            {mapValueAndName[1].name}
                        </option>
                        <option value={mapValueAndName[2].value}> 
                            {mapValueAndName[2].name}
                        </option>
                        <option value={mapValueAndName[3].value}> 
                            {mapValueAndName[3].name}
                        </option>
                    </>
                )
            case 2:
                return (
                    <>
                        <option value={mapValueAndName[2].value}> 
                            {mapValueAndName[2].name}
                        </option>
                        <option value={mapValueAndName[3].value}> 
                            {mapValueAndName[3].name}
                        </option>
                    </>
                )
            case 3:
                return (
                    <>
                        <option value={mapValueAndName[3].value}> 
                            {mapValueAndName[3].name}
                        </option>
                    </>
                )
            default:
                return (
                    mapValueAndName.map(
                        (element,index) => {
                            return (
                                <option key={index} value={element.value}> 
                                    {element.name}
                                </option>
                            )
                        }
                    )
                )
        }
    }

    var colorSelect = '';
    switch (statusItem*1) {
        case -1:
            colorSelect = 'huy';
            break;
        case 0:
            colorSelect = 'dat-hang';
            break;
        case 1:
            colorSelect = 'xac-nhan';
            break;
        case 2:
            colorSelect = 'giao-hang';
            break;
        case 3:
            colorSelect = 'thanh-cong';
            break;
    
        default:

            break;
    }

    // return ui
    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{'dincox'+itemRec.id_order}</td>
            <td>{itemRec.receiver}</td>
            <td>{itemRec.sent_to}</td>
            <td>
                <p>{itemRec.number_phone}</p>
                <p>{itemRec.email}</p>
            </td>
            <td>{itemRec.create_at}</td>
            <td>
                <select
                    value={statusItem}
                    onChange={onHandleChange}
                    className={colorSelect}
                >
                    {optionStatus()}
                </select>
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-search"></span>Chi tiết
                </button>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-print"></span>In hóa đơn
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;