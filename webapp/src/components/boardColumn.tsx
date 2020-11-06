// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react'

type Props = {
    onDrop?: (e: React.DragEvent<HTMLDivElement>) => void
    isDropZone?: boolean
}

type State = {
    isDragOver?: boolean
    dragPageX?: number
    dragPageY?: number
}

class BoardColumn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        let className = 'octo-board-column'
        if (this.props.isDropZone && this.state.isDragOver) {
            className += ' dragover'
        }
        const element =
            (<div
                className={className}
                onDragOver={(e) => {
                    e.preventDefault()
                    this.setState({isDragOver: true, dragPageX: e.pageX, dragPageY: e.pageY})
                }}
                onDragEnter={(e) => {
                    e.preventDefault()
                    this.setState({isDragOver: true, dragPageX: e.pageX, dragPageY: e.pageY})
                }}
                onDragLeave={(e) => {
                    e.preventDefault()
                    this.setState({isDragOver: false, dragPageX: undefined, dragPageY: undefined})
                }}
                onDrop={(e) => {
                    this.setState({isDragOver: false, dragPageX: undefined, dragPageY: undefined})
                    if (this.props.isDropZone) {
                        this.props.onDrop(e)
                    }
                }}
            >
                {this.props.children}
            </div>)

        return element
    }
}

export {BoardColumn}
