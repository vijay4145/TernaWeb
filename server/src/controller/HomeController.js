exports.home = {
    get : (req, res) => {
        res.status(200).json({
            success: true,
            greeting: "Home controller working OK",
        });
    }
}