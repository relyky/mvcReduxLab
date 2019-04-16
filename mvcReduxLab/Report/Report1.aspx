<%@ page language="C#" autoeventwireup="true" codebehind="Report1.aspx.cs" inherits="mvcReduxLab.Report.Report1" %>

<%@ register assembly="Microsoft.ReportViewer.WebForms" namespace="Microsoft.Reporting.WebForms" tagprefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Report1</title>
    <style>/*** ReportViewer CSS style 客制化         
        span.glyphui {
            margin: 1px;
        }

        .ToolbarPageNav input {
            margin: 1px;
        }

        .ToolbarRefresh.WidgetSet,
        .ToolbarPrint.WidgetSet,
        .ToolbarBack.WidgetSet,
        .ToolbarPowerBI.WidgetSet {
            height: 32px;
        }

        .WidgetSet {
            height: 32px;
        }

        .HoverButton {
            height: 32px;
        }

        .NormalButton {
            height: 32px;
        }

        .NormalButton table,
        .HoverButton table,
        .aspNetDisabled table {
            width: 56px;
        }

        .DisabledButton {
            height: 32px;
        }

        .ToolbarFind,
        .ToolbarZoom {
            padding-top: 3px;
        }

        .ToolBarBackground {
            background-color: #bdbdbd !important;
        }
        ***/
    </style>
</head>
<body>    
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager id="ScriptManager1" runat="server"></asp:ScriptManager>
            <rsweb:ReportViewer id="ReportViewer1" runat="server" SizeToReportContent="True"></rsweb:ReportViewer>
        </div>
    </form>
</body>
</html>
