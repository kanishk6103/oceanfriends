const Bucket = ({ length }) => {
    return (
        <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>
            Bucket {length}
        </div>
    );
};

export default Bucket;
