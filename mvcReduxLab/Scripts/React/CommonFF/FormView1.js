import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions.js'
import apiClient from './apiClient.js'
import { RadioButton, RadioGroup } from '@trendmicro/react-radio'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

/// 受理單位
class FormView1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminAreaList: [] // 受理單位
        }

    }

    componentWillMount() {
        //## init UI common data
        apiClient.getAdminAreaListPromise().then((resp) => {
            const adminAreaList = resp.data;
            this.setState({
                adminAreaList: adminAreaList
            })
        })
    }

    //componentDidMount() {
    //    // 取環境參數
    //    const { appInfo, commandBar, applicantInfo } = this.props;
    //    console.log('FormView1.componentDidMount', { appInfo, commandBar, applicantInfo })
    //
    //    // 取 from_mode, form_no
    //    let form_mode = 'INIT'
    //    let form_no = ''
    //    if (commandBar) {
    //        form_mode = commandBar.form_mode
    //        form_no = commandBar.form_no
    //    } else if (appInfo) {
    //        form_mode = appInfo.entryMode
    //        form_no = appInfo.entryFormNo
    //    }
    //
    //    //## first to fill UI 
    //    // 當 為申請模式 且 未初始化，才取申請人的資料下來
    //    if (['APPLY', 'NEW'].includes(form_mode) && cuIsEmpty(form_no) && cuIsEmpty(this.props.recUnit)) {
    //        //## first to fill UI 
    //        const args = { invoiceNo: applicantInfo.applicantId }
    //        apiClient.getCompanyAdminAreaPromise(args).then((resp) => {
    //            const recUnit = resp.data
    //            this.props.handleValueChange('recUnit', recUnit)
    //        })
    //    }
    //}

    render() {

        //// 受理單位
        //const adminArea = [
        //    { areaCode: 'KEL', areaName: '北部航務中心' },
        //    { areaCode: 'TPE', areaName: '北部航務中心(𦤼北)' },
        //    { areaCode: 'SUO', areaName: '北部航務中心(蘇澳)' },
        //    { areaCode: 'TXG', areaName: '中部航務中心' },
        //    { areaCode: 'KHH', areaName: '南部航務中心' },
        //    { areaCode: 'HUN', areaName: '東部航務中心' }
        //];

        return (
            <div className='block'>
                <table className='tb_style' width='100%' cellSpacing='0' cellPadding='0' border='0'>
                    <tbody>
                        <tr className='bg'>
                            <th width='15%'>表單編號</th>
                            <td>
                                {this.props.form_no}
                            </td>
                        </tr>
                        <tr className='bg'>
                            <th width='15%'>受理單位</th>
                            <td>
                                {/*<RadioGroup value={this.props.recUnit} onChange={(value) => this.props.handleValueChange('recUnit',value)} disabled={false}>
                                    {this.state.adminAreaList.map((item, index) =>
                                        <RadioButton key={index} label={item.areaName} value={item.areaCode} />
                                    )}
                                </RadioGroup>*/}
                                <div className="selectbox">
                                    <select value={this.props.recUnit} onChange={(e) => this.props.handleValueChange('recUnit', e.target.value)}>
                                        <option value='' hidden>請選擇</option>
                                        {this.state.adminAreaList.map((item, index) =>
                                            <option key={index} value={item.areaCode}>{item.areaName}</option>
                                        )}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        commandBar: state.commandBar,
        applicantInfo: state.formData2,
        form_no: state.commandBar.form_no,
        recUnit: state.formData1.recUnit,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleValueChange: (name, value) => {
            dispatch(actions.assignValue(name, value, 'formView1Reducer'));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormView1);
