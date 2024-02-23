
export function Video({ src, height, width }) {
    return <iframe width="560" height="315"
        src title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share" allowfullscreen>
        </iframe>
}