import React from 'react'
import GoogleDocsViewer from 'react-google-docs-viewer'

export default function Doc() {
    return (
        <div>
            <GoogleDocsViewer
            width="600px"
            height="780px"
            fileUrl="https://github.com/WilliamHarer/Letters-of-Recommendation/blob/master/William%20Harer%20LofR.pdf"
            />
        </div>
    )
}
