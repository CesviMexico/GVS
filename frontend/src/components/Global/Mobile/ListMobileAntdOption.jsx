import React, { useRef, useState } from 'react';
import { Dialog, List, SwipeAction, Grid, Skeleton, TextArea, AutoCenter, Button, ErrorBlock, } from 'antd-mobile';
import { Icon } from '@iconify/react';
import { Uid } from '../funciones'
export const ListMobileAntdOption = (props) => {

    const {
        loading, headerTitle, dataset,
        rightActionsSwipe = "default", onClickButton,
        onActionSheet, pdf,
        color, backgroundColor,
    } = props

    const ref = useRef(null);
    // const [valueMotivo, setValueMotivo] = useState("");

    let valueMotivo = null;

    const onRightActions = (data) => {

        const rightActionsDefault = [
            {
                key: Uid(data.id),
                text: <Icon icon={"heroicons-outline:check"} style={{ fontSize: "30px" }} />,
                color: '#66bb6a',
                onClick: async () => {
                    await Dialog.confirm({
                        confirmText: 'OK',
                        cancelText: 'Cancelar',
                        content: '¿Confirmas que el cliente acepta el pago?',
                        onConfirm: () => onActionSheet(data, 1, undefined),
                        // onClose: ref.current.close()
                    })
                },
            },
            {
                key: Uid(data.id),
                text: <Icon icon={"heroicons-outline:x"} style={{ fontSize: "24px" }} />,
                color: 'danger',

                onClick: async () => {
                    await Dialog.confirm({
                        confirmText: 'OK',
                        cancelText: 'Cancelar',
                        content:
                            <>
                                <AutoCenter>
                                    <Grid columns={1} gap={10}>
                                        <Grid.Item>
                                            ¿Confirmas que el cliente no acepta el pago?
                                        </Grid.Item>
                                        <Grid.Item />
                                        <Grid.Item>
                                            <TextArea
                                                autoSize={true}
                                                placeholder='Motivo'
                                                // value={valueMotivo}
                                                onChange={val => {
                                                    valueMotivo = val
                                                    console.log("val", val)
                                                }}
                                            />
                                        </Grid.Item>
                                    </Grid>
                                </AutoCenter>
                            </>
                        ,
                        onConfirm: () => onActionSheet(data, 0, valueMotivo),
                        // onClose: ref.current.close()
                    })
                    //ref.current.close()
                },

            },
        ];
        const rightActions = rightActionsSwipe === "default" ? rightActionsDefault : rightActionsSwipe

        return rightActions
    }

    const onRightActions2 = (data) => {

        const rightActionsDefault2 = [
            {
                key: Uid(data.id),
                text: <Icon icon={"carbon:generate-pdf"} style={{ fontSize: "30px" }} />,
                color: 'primary',
                onClick: async () => {
                    await Dialog.confirm({
                        confirmText: 'OK',
                        cancelText: 'Cancelar',
                        content: '¿Seguro que quieres ver PDF?',
                        onConfirm: () => onActionSheet(data),
                        // onClose: ref.current.close()
                    })
                },
            },
        ];

        const rightActions = rightActionsSwipe === "default" ? rightActionsDefault2 : rightActionsSwipe

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
                    {dataset.length > 0 ?
                        <List header={headerTitle}>
                            {dataset.map(data => (
                                <SwipeAction
                                    key={Uid(data.id)}
                                    ref={ref}
                                    closeOnAction={false}
                                    closeOnTouchOutside={false}
                                    rightActions={pdf ? onRightActions2(data) : onRightActions(data)}
                                >
                                    <List.Item
                                        key={Uid(data.id)}
                                        prefix={data.avatar}
                                        description={data.description}
                                        extra={data.extra}
                                        disabled={data.disabled}
                                    >
                                        {data.content}
                                    </List.Item>
                                </SwipeAction>
                            ))}
                        </List>
                        :
                        <AutoCenter>
                            <ErrorBlock
                                fullPage
                                title="No hay datos por mostrar..."
                                status='busy'
                                description={" "}
                                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                            >
                                <Button
                                    loading={loading}
                                    onClick={() => onClickButton()}
                                    style={{
                                        color: color,
                                        backgroundColor: backgroundColor
                                    }}
                                >
                                    Actualizar
                                </Button>
                            </ErrorBlock>
                        </AutoCenter>
                    }

                </>
        }
        </>
    );
}


