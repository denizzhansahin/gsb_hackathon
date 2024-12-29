﻿using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class VolunteeringRepository : BaseRepository<Volunteering, GSBDataContext>, IVolunteeringRepository
{
}