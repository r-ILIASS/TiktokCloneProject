import "./upload.scss";

export default function Upload() {
  return (
    <div className="upload">
      <br />
      <h1>Upload video</h1>
      <p>This video will be published to @{}</p>
      <div className="container">
        <form>
          <div className="section">
            <div className="image-upload"></div>
            <div className="form-section">
              <div className="section input-section">
                <label className="bold">Caption</label>
                <input className="input" name="caption" />
              </div>
              <div className="break"></div>
              <div className="input-section">
                <label className="bold">Video Url</label>
                <input className="input" name="video" />
              </div>
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}
