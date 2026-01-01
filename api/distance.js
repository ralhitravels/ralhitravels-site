export default async function handler(req, res) {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.status(400).json({ error: "Missing locations" });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        from
      )}&destinations=${encodeURIComponent(
        to
      )}&units=metric&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    const data = await response.json();

    if (
      data.status !== "OK" ||
      data.rows[0].elements[0].status !== "OK"
    ) {
      return res.status(500).json({ error: "Google Maps error", data });
    }

    const meters = data.rows[0].elements[0].distance.value;
    const km = Math.ceil(meters / 1000);

    res.status(200).json({ km });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
