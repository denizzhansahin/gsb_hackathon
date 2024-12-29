﻿using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class Stage : IEntity
{
    [Key] public int Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
}