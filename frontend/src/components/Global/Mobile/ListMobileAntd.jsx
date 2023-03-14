import React, { useRef, useState } from 'react';
import { Dialog, List, SwipeAction, Toast, Image, ActionSheet } from 'antd-mobile';
import { Icon } from '@iconify/react';

export const ListMobileAntd = (props) => {
    const { headerTitle, dataset, actionSheet = true, rightActionsSwipe = "default", actionSheetActions = [], onActionSheetEdit, setKeyService } = props
    const [visibleaction, setVisibleAction] = useState(false);
    const ref = useRef(null);

    const actions = actionSheetActions

    const onRightActions = (data) => {
        
        const rightActionsDefault = [
            {
                key: 'edit',
                text: <Icon icon={"fa:edit"} style={{ fontSize: "24px" }} />,
                color: 'primary',
                onClick: () => {
                    onActionSheetEdit(data)
                    ref.current.close()
                },
            },
            {
                key: 'delete',
                text: <Icon icon={"fluent:delete-dismiss-20-filled"} style={{ fontSize: "32px" }} />,
                color: 'danger',
                onClick: async () => {
                    await Dialog.confirm({
                        content: '¿Seguro que quieres eliminarlo?',
                    })
                    ref.current.close()
                },
            },
        ];
        const rightActions = rightActionsSwipe === "default" ? rightActionsDefault : rightActionsSwipe

        return rightActions
    }

    const auxSheetAction = (data) => {
        setVisibleAction(true) 
        setKeyService(data.key)
    }

    const onClickActionListItem = (data) => {
        actionSheet && auxSheetAction(data)
        !actionSheet && console.log(data)
    }
    return (
        <>
            <List header={headerTitle}>
                {dataset.map(data => (
                    <SwipeAction
                        ref={ref}
                        closeOnAction={false}
                        closeOnTouchOutside={false}
                        rightActions={onRightActions(data)}
                    >
                        <List.Item
                            onClick={() => onClickActionListItem(data)}
                            key={data.key}
                            prefix={data.avatar != null ? <Image src={data.avatar} style={{ borderRadius: 20 }} fit='cover' width={40} height={40} /> : <Icon icon={data.icon} style={{ fontSize: "30px" }} />}
                            description={data.description}
                            extra={data.extra}
                            disabled={data.disabled}
                        >
                            {data.content}
                        </List.Item>
                    </SwipeAction>
                ))}
            </List>
            <ActionSheet visible={visibleaction} actions={actions} onClose={() => setVisibleAction(false)} />
        </>
    );
}


