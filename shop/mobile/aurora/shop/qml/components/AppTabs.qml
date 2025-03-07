import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import QtQuick.Window 2.2

Column {

    AppTheme {
        id: appTheme
    }

    property string textTab0: "First"
    property string textTab1: "Second"

    property string colorText: "black"
    property string colorTextAction: "white"
    property string background: appTheme.colorVariant2
    property string backgroundItem: "transparent"
    property string backgroundAction: "#2d2e31"

    property var tab

    property int _tab: 0
    property bool _tab0Click: false
    property bool _tab1Click: false

    function _onChangeTab(tab) {
        idAppTabs._tab = tab
        idAppTabs.tab = tab
    }

    id: idAppTabs
    width: parent.width

    Rectangle {
        width: parent.width
        height: idRowButtons.height
        color: idAppTabs.background
        radius: appTheme.shapesLarge

        Rectangle {
            id: toggleswitch
            width: parent.width / 2 - appTheme.paddingSmall - appTheme.paddingSmall / 2
            height: parent.height - appTheme.paddingSmall * 2
            color : idAppTabs.backgroundAction
            radius: appTheme.shapesLarge
            y: appTheme.paddingSmall
            x: (parent.width / 2 * idAppTabs._tab) + (idAppTabs._tab == 0 ? appTheme.paddingSmall : appTheme.paddingSmall / 2)
            Behavior on x {
                NumberAnimation { properties: "x"; easing.type: Easing.InOutQuad; duration: 300 }
            }
        }

        Row {
            id: idRowButtons
            height: label.height + appTheme.paddingSmall * 2
            width: parent.width - appTheme.paddingSmall * 2
            spacing: appTheme.paddingSmall
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.top: parent.top
            anchors.topMargin: appTheme.paddingSmall

            MouseArea {
                height: label.height
                width: parent.width / 2 - appTheme.paddingSmall / 2
                onClicked: _onChangeTab(0)

                Label {
                    id: label
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: idAppTabs.textTab0
                    color: idAppTabs._tab == 0 ? idAppTabs.colorTextAction : idAppTabs.colorText
                    padding: appTheme.paddingMedium
                    Behavior on color {
                        ColorAnimation { easing.type: Easing.InOutQuad; duration: 300}
                    }
                }

                onPressedChanged: {
                    idAppTabs._tab0Click = !idAppTabs._tab0Click
                }

                Rectangle {
                    width: parent.width
                    height: parent.height
                    color : idAppTabs.backgroundAction
                    radius: appTheme.shapesLarge
                    opacity: 0.4
                    visible: idAppTabs._tab0Click
                }
            }

            MouseArea {
                height: label2.height
                width: parent.width / 2 - appTheme.paddingSmall / 2
                onClicked: _onChangeTab(1)

                Label {
                    id: label2
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: idAppTabs.textTab1
                    color: idAppTabs._tab == 1 ? idAppTabs.colorTextAction : idAppTabs.colorText
                    padding: appTheme.paddingMedium
                    Behavior on color {
                        ColorAnimation { easing.type: Easing.InOutQuad; duration: 300}
                    }
                }

                onPressedChanged: {
                    idAppTabs._tab1Click = !idAppTabs._tab1Click
                }

                Rectangle {
                    width: parent.width
                    height: parent.height
                    color : idAppTabs.backgroundAction
                    radius: appTheme.shapesLarge
                    opacity: 0.4
                    visible: idAppTabs._tab1Click
                }
            }
        }

    }
}
