import React from 'react'

export default function Vr2() {
    return (
        <div>
            <h1>Vr2</h1>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <iframe
                    src="https://vr1-nu.vercel.app/"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>

    )
}
