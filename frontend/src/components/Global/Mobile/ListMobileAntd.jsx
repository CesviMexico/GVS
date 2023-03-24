import React from 'react';
import {
    List, Image, Skeleton,
    AutoCenter, ErrorBlock, Button,

} from 'antd-mobile';
import { Icon } from '@iconify/react';
import { Uid } from '../funciones'
export const ListMobileAntd = (props) => {
    const {
        headerTitle, dataset, loading,
        color, backgroundColor, onClickButton, } = props

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
                                <List.Item
                                    //onClick={() =>  onClickActionListItem(data)}
                                    key={Uid()}
                                    // prefix={
                                    //     data.avatar !== null ?
                                    //         <Image
                                    //             src={data.avatar}
                                    //             style={{ borderRadius: 8 }}
                                    //             fit='cover'
                                    //             width={80}
                                    //             height={70}

                                    //         /> :
                                    //         <Icon
                                    //             icon={data.icon}
                                    //             style={{ fontSize: "30px" }}
                                    //         />
                                    // }
                                    prefix={data.avatar}
                                    description={data.description}
                                    extra={data.extra}
                                    disabled={data.disabled}
                                >
                                    {data.content}
                                </List.Item>
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


