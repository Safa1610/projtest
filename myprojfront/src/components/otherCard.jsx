<Card>
  <Card.Header>{job.titre}</Card.Header>
  <Card.Body>
    <Card.Title>{job.titre}</Card.Title>
    <Card.Text>{job.titre}</Card.Text>
    {/* <Link to={`/job/${index}`}>Voir les détails</Link> */}

    <Button
      className="btn btn-primary mt-3"
      onClick={() => nav(`/job/${index}`)}
    >
      Voir les détails
    </Button>
    {/* <Button
          variant="primary"
          //  onClick={() => nav(`/${index}`)}
        >
          Postuler
        </Button> */}
  </Card.Body>
</Card>;
