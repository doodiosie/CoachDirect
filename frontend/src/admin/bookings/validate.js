export default function (data) {
    return (
        data.get("firstName") &&
        data.get("lastName") &&
        data.get("pickupDate") &&
        data.get("pickupAddress") &&
        data.get("destinationAddress") &&
        !isNaN(data.get("price"))
    );
}
