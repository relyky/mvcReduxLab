import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'
import { FormBlock } from 'CommonMA/FormInputFields.js'

/// 進港預報
const DataInfoView3 = ({ dataInfo }) => (
    <div>
        <FormBlock subTitle="進港簽證資料" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>簽證編號</th>
                        <td>ATXG108001726</td>
                    </tr>
                    <tr>
                        <th className="table-active">預定進港時間</th>
                        <td>2019/03/20 08:00</td>
                    </tr>
                    <tr>
                        <th className="table-active">高港港灣編號</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">重報次數</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶中文名稱</th>
                        <td>閩龍298</td>
                    </tr>
                    <tr>
                        <th className="table-active">總噸</th>
                        <td>499</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶國籍</th>
                        <td>SL．獅子山</td>
                    </tr>
                    <tr>
                        <th className="table-active">船籍港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶保全等級</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th className="table-active">進港目的</th>
                        <td>裝貨</td>
                    </tr>
                    <tr>
                        <th className="table-active">出發港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">前一港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">次一港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">目的港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">進入港口</th>
                        <td>臺中港</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶呼號</th>
                        <td>9LU2822</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶英文名稱</th>
                        <td>MINLONG 298</td>
                    </tr>
                    <tr>
                        <th className="table-active">淨噸</th>
                        <td>279</td>
                    </tr>
                    <tr>
                        <th className="table-active">ISCC及CSR證書</th>
                        <td>Y</td>
                    </tr>
                    <tr>
                        <th className="table-active">前一港船舶保全等級</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">航線名稱</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">靠泊碼頭</th>
                        <td>台中港09碼頭</td>
                    </tr>
                    <tr>
                        <th className="table-active">註銷時間</th>
                        <td>無</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
        <FormBlock subTitle="貨品數量及其他" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>總長(LOA)</th>
                        <td>48.01</td>
                    </tr>
                    <tr>
                        <th className="table-active">危險品</th>
                        <td>無危險品</td>
                    </tr>
                    <tr>
                        <th className="table-active">雜貨數量(噸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">液體貨數量(噸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">前吃水</th>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th className="table-active">船隻掛號</th>
                        <td>08FAJV</td>
                    </tr>
                    <tr>
                        <th className="table-active">病(人)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">港灣船種</th>
                        <td>B41</td>
                    </tr>
                    <tr>
                        <th className="table-active">汽車數量(輛)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">散雜貨數量(噸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">貨櫃數量(TEU)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">後吃水</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th className="table-active">衛檢號碼</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">死亡(人)</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
        <FormBlock subTitle="簽證人數" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%'}}>船員人數(台灣)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">船員人數(港澳)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">旅客人數(台灣)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">旅客人數(港澳)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">過境旅客(台灣)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">過境旅客(港澳)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(台灣)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(港澳)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">隨船人數</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">船員人數(外國)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">船員人數(大陸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">旅客人數(外國)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">旅客人數(大陸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">過境旅客(外國)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">過境旅客(大陸)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(外國)</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(大陸)</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
    </div>
)

export default DataInfoView3;
