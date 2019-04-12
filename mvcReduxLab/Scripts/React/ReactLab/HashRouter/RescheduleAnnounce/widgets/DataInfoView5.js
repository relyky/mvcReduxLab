import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'
import { FormBlock } from 'CommonMA/FormInputFields.js'

/// 出港預報
const DataInfoView5 = ({ dataInfo }) => (
    <div>
        <FormBlock subTitle="出港簽證資料" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>簽證編號</th>
                        <td>ATXG108001726</td>
                    </tr>
                    <tr>
                        <th className="table-active">港灣編號</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">重報次數</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶中文名稱</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">總噸</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶國籍</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船籍港</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">預定出港時間</th>
                        <td>無</td>
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
                        <th className="table-active">進出港口</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">危險品</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶呼號</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船舶英文名稱</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">淨噸</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">港灣船種</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">靠泊碼頭</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">航線名稱</th>
                        <td>無</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
        <FormBlock subTitle="貨品數量及其他" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>雜貨數量(噸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">液體貨數量(噸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">汽車數量(輛)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">前吃水</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">船隻掛號</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">病(人)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">散雜貨數量(噸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">貨櫃數量(TEU)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">後吃水</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">衛檢號碼</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">死亡(人)</th>
                        <td>無</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
        <FormBlock subTitle="船員人數" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>甲級船員(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">甲級船員(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">乙級船員(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">乙級船員(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">甲級船員(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">甲級船員(大陸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">乙級船員(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">乙級船員(大陸)</th>
                        <td>無</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
        <FormBlock subTitle="簽證人數" noGutters borderless>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <th className="table-active" style={{ width: '50%' }}>原有旅客(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">原有旅客(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">上船旅客(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">上船旅客(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">下船旅客(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">下船旅客(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(台灣)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(港澳)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">隨船人數</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">原有旅客(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">原有旅客(大陸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">上船旅客(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">上船旅客(大陸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">下船旅客(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">下船旅客(大陸)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(外國)</th>
                        <td>無</td>
                    </tr>
                    <tr>
                        <th className="table-active">其他人數(大陸)</th>
                        <td>無</td>
                    </tr>
                </tbody>
            </Table>
        </FormBlock>
    </div>
)

export default DataInfoView5;
