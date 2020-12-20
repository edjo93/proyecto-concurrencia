import React from 'react'

function AddAlbum() {
    return (
        <div className="col d-flex justify-content-center" style={{ marginTop: "200px" }}>
            <form >
                <div class="form-group row">
                    <div class="row">
                        <label for="staticEmail" class="col-sm-2 col-form-label" style={{ marginRight: "0px" }}>Email..... </label>
                    </div>
                    <div class="col-sm-9">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="row">
                        <label for="staticEmail" class="col-sm-2 col-form-label" style={{ marginRight: "-5px" }}>Password</label>
                    </div>
                    <div class="col-sm-9">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddAlbum;
