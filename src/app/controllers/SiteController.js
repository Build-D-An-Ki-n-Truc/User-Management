class SiteController {
    // get /
    index(req, res) {
        res.render('home');
    }
    // get /search
    search(req, res) {
        res.render('search');
    }
}
// export cau gi thi khi require nhan duoc gia tri do
module.exports = new SiteController();
