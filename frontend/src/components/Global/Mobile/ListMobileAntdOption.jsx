import React, { useRef, useState } from 'react';
import { Dialog, List, SwipeAction, Toast, Image, ActionSheet, Skeleton } from 'antd-mobile';
import { Icon } from '@iconify/react';
import { Uid } from '../funciones'
export const ListMobileAntdOption = (props) => {

    const {
        loading, headerTitle, dataset,
        rightActionsSwipe = "default",
        onActionSheetEdit,
    } = props

    const ref = useRef(null);


    const onRightActions = (data) => {

        const rightActionsDefault = [            
            {
                key: 'Si',
                text: <Icon icon={"heroicons-outline:check"} style={{ fontSize: "30px" }} />,
                color: '#66bb6a',

                onClick: () => {
                    onActionSheetEdit(data)
                    ref.current.close()
                },

            },
            {
                key: 'No',
                text: <Icon icon={"heroicons-outline:x"} style={{ fontSize: "24px" }} />,
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

    return (
        <>{
            loading ?
                <>  <Skeleton.Title />

                    <Skeleton animated style={{
                        '--width': '100%',
                        '--height': '100px',
                        '--border-radius': ' 8px',
                    }} />
                    <br />
                    <Skeleton animated style={{
                        '--width': '100%',
                        '--height': '100px',
                        '--border-radius': ' 8px',
                    }} />
                    <br />
                    <Skeleton animated style={{
                        '--width': '100%',
                        '--height': '100px',
                        '--border-radius': ' 8px',
                    }} />

                </>
                :
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
                                    key={Uid()}
                                    prefix={ data.avatar }
                                    description={data.description}
                                    extra={data.extra}
                                    disabled={data.disabled}
                                >
                                    {data.content}
                                </List.Item>
                            </SwipeAction>
                        ))}
                    </List>
                </>
        }
        </>
    );
}


